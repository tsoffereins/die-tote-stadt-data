(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'alten-lieb-und-treu',
            width: 642,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '4/4' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 0,
        width: 240,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'Eb5/h.',
                            'Bb4/q'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 240,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'Ab4/q',
                            'G4/q',
                            'F4/q',
                            'Eb4/q'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 3
    system = vf.System({
        x: 440,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'F4/h.',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
