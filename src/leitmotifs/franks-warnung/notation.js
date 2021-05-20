(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'franks-warnung',
            width: 1122,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '6/8' });

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
                        score.notes('B4/8/r'),
                        score.beam(
                            score.notes(
                                [
                                    'Ab3/8.',
                                    'Gb4/16'
                                ].join(',')
                            )
                        ),
                        score.notes(
                            [
                                'G4/q',
                                'F4/8[id="n1"]'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('6/8');

    // Measure 2
    system = vf.System({
        x: 260,
        y: 0,
        width: 300,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.beam(
                            score.notes(
                                [
                                    'F4/8[id="n2"]',
                                    'Eb4/8.',
                                    'Db4/16'
                                ].join(',')
                            )
                        ),
                        score.notes(
                            [
                                'Db4/q',
                                'C4/8[id="n3"]'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Measure 3
    system = vf.System({
        x: 560,
        y: 0,
        width: 300,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.beam(
                            score.notes(
                                [
                                    'C4/8[id="n4"]',
                                    'Bb3/8.',
                                    'Ab3/16'
                                ].join(',')
                            )
                        ),
                        score.notes(
                            [
                                'Eb4/q',
                                'Db4/8'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    // Measure 4
    system = vf.System({
        x: 860,
        y: 0,
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.beam(
                            score.notes(
                                [
                                    'C4/8',
                                    'Db4/8',
                                    'Bb3/8'
                                ].join(','),
                                { stem: 'up' }
                            )
                        ),
                        score.notes(
                            [
                                'F4/q',
                                'Eb4/8'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    // Render the score
    vf.draw();
})();
