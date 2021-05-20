(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'traum-der-wiederkehr',
            width: 862,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '2/2' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 20,
        width: 400,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.tuplet(
                            [
                                score.notes('E5/q'),
                                score.beam(
                                    score.notes(
                                        [
                                            'Fb5/8',
                                            'E5/8'
                                        ].join(',')
                                    )
                                ),
                                score.notes('Gb5/q[id="n1"]')
                            ].reduce((a, b) => a.concat(b)),
                            { num_notes: 3 }
                        ),
                        score.tuplet(
                            [
                                score.notes('Gb5/q[id="n2"]'),
                                score.beam(
                                    score.notes(
                                        [
                                            'A5/8',
                                            'Bb5/8',
                                            'Cb6/8',
                                            'D6/8'
                                        ].join(',')
                                    )
                                )
                            ].reduce((a, b) => a.concat(b)),
                            { num_notes: 3 }
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('bass')
        .addTimeSignature('2/2');

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Measure 2
    system = vf.System({
        x: 400,
        y: 20,
        width: 220,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes('E6/h[id="n3"]'),
                        score.notes('E6/q[id="n4"]'),
                        score.tuplet(
                            score.beam(
                                score.notes(
                                    [
                                        'D6/8',
                                        'E6/8',
                                        'D6/8'
                                    ].join(',')
                                )
                            )
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    // Measure 3
    system = vf.System({
        x: 620,
        y: 20,
        width: 240,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'Cb6/h[id="n5"]',
                            'Cb6/8[id="n6"]',
                            'B4/8/r',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n5'),
        to: registry.getElementById('n6')
    });

    // Render the score
    vf.draw();
})();
