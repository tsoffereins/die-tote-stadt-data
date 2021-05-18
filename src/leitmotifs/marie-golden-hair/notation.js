(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'marie-golden-hair',
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
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes(
                            [
                                'B5/q',
                                'F#5/q'
                            ].join(',')
                        ),
                        score.beam(
                            score.notes(
                                [
                                    'C#5/8.',
                                    'G#4/16'
                                ].join(','),
                                { stem: 'down' }
                            )
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('3/4');

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
                    score.notes('D#5/h.')
                )
            ]
        });

    // Render the score
    vf.draw();
})();
