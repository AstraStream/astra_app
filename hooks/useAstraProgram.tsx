import React, { useMemo } from 'react'
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { AnchorProvider, BN, Program,  setProvider } from '@coral-xyz/anchor'
import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token'
import { SYSTEM_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/native/system'
import IDL from '../lib/idl/idl.json'
import { Anchor } from 'lucide-react'
import { getAssociatedTokenAddressSync } from '@solana/spl-token'

interface IAnchorProp {
    connection: Connection,
    wallet: any
}

const getAstraProgram = (provider: AnchorProvider) => {    
    const program = new Program(IDL, provider);
    return program;
}

const useAstraProgram = ({ connection, wallet }: IAnchorProp) => {
    const provider = useMemo(() => {
        return new AnchorProvider(
            connection, 
            wallet, 
            {commitment: 'confirmed'}
        );
    }, [connection, wallet])
    const program = useMemo(() => getAstraProgram(provider), [provider])
    const programId = new PublicKey("4Hu4KovRGERwUigKkoQM8LYHwPPJiKLy4PkSaub6pHCv");

    const getPool = (mint: PublicKey) => {
        const [pda] = PublicKey.findProgramAddressSync(
            [Buffer.from("pool"), mint.toBuffer()],
            programId
        )
        return pda
    }

    const getPoolVault = (mint: PublicKey) => {
        const [pda] = PublicKey.findProgramAddressSync(
            [Buffer.from("pool_vault"), mint.toBuffer()],
            programId
        );
        return pda
    }

    const master = () => {
        const [pda] = PublicKey.findProgramAddressSync(
            [Buffer.from("master")],
            programId
        );
    }

    const getClaimer = (address: PublicKey, poolAccount: PublicKey) => {
        const [pda] = PublicKey.findProgramAddressSync(
            [Buffer.from("claimer"), address.toBuffer(), poolAccount.toBuffer()],
            programId
        );
        return pda;
    }

    const claimReward = async (
        username: string,
        role: string,
        amount: number,
        wallet: PublicKey,
        mint: PublicKey,
    ) => {
        const amountInLamports = new BN(amount * LAMPORTS_PER_SOL);
        const poolAccount = getPool(mint);
        const claimerAccount = getClaimer(wallet, poolAccount);
        const claimerAta = getAssociatedTokenAddressSync(mint, wallet);

        const tx = await program.methods.claimReward(username, role, amountInLamports)
            .accounts({
                signer: wallet,
                mint,
                poolAccount: getPool(mint),
                poolTokenAccount: getPoolVault(mint),
                claimerAccount,
                claimerAta,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SYSTEM_PROGRAM_ID
            })
            .rpc();
            return tx;
    }

    return {
        claimReward
    }
}

export default useAstraProgram