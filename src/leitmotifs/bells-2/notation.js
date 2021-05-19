(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bells-2',
            width: 422,
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
        width: 420,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/8/r',
                            'G5/8',
                            'B4/8/r',
                            'C5/8',
                            'B4/8/r',
                            'D5/8',
                            'B4/8/r',
                            'F4/8'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Render the score
    vf.draw();
})();
