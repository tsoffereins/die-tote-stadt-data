(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bells-1',
            width: 742,
            height: 160
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '4/4' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 30,
        width: 440,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B5/8/r',
                            '(E5 B5 E6)/8',
                            'B5/8/r',
                            '(C#5 F#5 C#6)/8',
                            'B5/8/r',
                            '(E5 B5 E6)/8',
                            'B5/8/r',
                            '(C#5 F#5 C#6)/8'
                        ].join(','),
                        { stem: 'up' }
                    )
                ),
                score.voice(
                    score.notes(
                        [
                            'E4/q/r',
                            '(C#4 F#4 C#5)/8',
                            'E4/8/r',
                            '(E4 B4 E5)/8',
                            'E4/8/r',
                            '(C#4 F#4 C#5)/8',
                            'E4/8/r'
                        ].join(','),
                        { stem: 'down' }
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 440,
        y: 30,
        width: 300,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            '(E4 B4 E5)/8',
                            'B4/8/r',
                            'B4/q/r',
                            'B4/h/r',
                        ].join(','),
                        { stem: 'down' }
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
