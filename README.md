# AstraApp


### Tech Stacks
- Howler.js
- Motion
- Tailwindcss
- Nextjs
- Tanstack Query

### Challenges
- I had a serious issue integrating Howler for HTML Audio. It turns out the issue came for the initializing the library properly in my PlayerProvider page. I had to initialize Howler in a seperate variable before assigning it to my Howler useRef variable. Here is my code

```
    const sound = new Howl({
    src: [track.url],
    html5: true,
    volume,
    onplay: () => {
        setDuration(howlRef.current?.duration() as number);
        
        // Set isPlaying state
        setIsPlaying(true);

        // Update audio
        startTimer();
    },
    onloaderror: (_, err) => {
        console.error("Howler load error", err);
    },
    onplayerror: (_, err) => {
        console.error("Howler play error", err);
        sound.once('unlock', () => {
            sound.play();
        });
    },
    onend: () => {
        playNext()
    },
    onpause: () => {
        setIsPlaying(false);
        cancelAnimationFrame(timerRef.current as any);
    },
    onstop: () => {
        setIsPlaying(false);
        cancelAnimationFrame(timerRef.current as any);
        setCurrentTime(0);
    }
});

howlRef.current = sound;

// Play audio
sound.play();
```