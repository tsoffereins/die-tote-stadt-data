(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bruges-bells-1',
            width: 700,
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
        width: 400,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B5/8/r',
                            '(E6 B5 E5)/8',
                            'B5/8/r',
                            '(C#6 F#5 C#5)/8',
                            'B5/8/r',
                            '(E6 B5 E5)/8',
                            'B5/8/r',
                            '(C#6 F#5 C#5)/8'
                        ].join(','),
                        { stem: 'up' }
                    )
                ),
                score.voice(
                    score.notes(
                        [
                            'E4/q/r',
                            '(C#5 F#4 C#4)/8',
                            'E4/8/r',
                            '(E5 B4 E4)/8',
                            'E4/8/r',
                            '(C#5 F#4 C#4)/8',
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
        x: 400,
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
                            '(E5 B4 E4)/8',
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
