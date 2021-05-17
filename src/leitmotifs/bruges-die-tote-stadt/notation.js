(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bruges-die-tote-stadt',
            width: 420,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '2/2' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 0,
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/q/r',
                            'B4/8/r',
                            'D4/8',
                            'A4/q',
                            'B4/8/r',
                            'F#4/8'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('2/2');

    // Measure 2
    system = vf.System({
        x: 260,
        y: 0,
        width: 160,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes('C5/w')
                )
            ]
        });

    // Render the score
    vf.draw();
})();
