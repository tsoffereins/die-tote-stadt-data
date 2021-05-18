(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bruges-behutsam',
            width: 422,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '3/4' });

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
                            'B4/q/r',
                            'B4/8/r.',
                            'F#4/16',
                            'A4/q'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    system = vf.System({
        x: 240,
        y: 0,
        width: 180,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'E4/q',
                            'B4/q/r',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
