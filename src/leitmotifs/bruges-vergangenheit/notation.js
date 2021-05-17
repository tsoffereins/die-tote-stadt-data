(function () {
    let system;

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'bruges-vergangenheit',
            width: 520,
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
        width: 280,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes(
                            [
                                'B4/h/r',
                                'B4/q/r',
                                'B4/8/r'
                            ].join(',')
                        ),
                        score.beam(
                            score.notes(
                                [
                                    'B4/16',
                                    'F#4/16'
                                ].join(','),
                                { stem: 'up' }
                            )
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 280,
        y: 0,
        width: 240,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes('E4/q.'),
                        score.beam(
                            score.notes(
                                [
                                    'F#4/16',
                                    'C#4/16'
                                ].join(',')
                            )
                        ),
                        score.notes('G#4/h')
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    // Render the score
    vf.draw();
})();
