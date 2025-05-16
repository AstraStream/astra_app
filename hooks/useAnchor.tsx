import React from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { AnchorProvider, Program, setProvider } from '@coral-xyz/anchor'
import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token'
import { SYSTEM_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/native/system'

interface IAnchorProp {
    connection: Connection,
    wallet: any
}

const useAnchor = ({ connection, wallet }: IAnchorProp) => {

    const astraProgramId = () => {
        const provider = new AnchorProvider(
            connection, 
            wallet, 
            {commitment: 'confirmed'}
        );

        // set provider
        setProvider(provider);
        
        const program = new Program(IDL, provider);
        return program;
    }

    const initialize = async (program: Program) => {
        const tx = await program.methods
            .create_master()
            .accounts({ signer: wallet.publicKey })
            .rpc({commitment: 'confirmed'})
    }

    const createPool = async (
        program: Program,
        masterPDA: PublicKey,
        mintAddress: PublicKey,
        poolTokenAccount: PublicKey
    ) => {
        const tx = await program.methods.createPool()
            .accounts({
                signer: wallet.pulicKey,
                masterAccount: masterPDA,
                mint: mintAddress,
                poolTokenAccount,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SYSTEM_PROGRAM_ID
            })
            .rpc()
    }

    return {
        astraProgramId
    }
}

export default useAnchor