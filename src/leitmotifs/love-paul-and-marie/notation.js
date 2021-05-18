(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'love-paul-and-marie',
            width: 682,
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
        width: 320,
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
                                    'G4/8',
                                    'Ab4/16',
                                    'Bb4/16'
                                ].join(','),
                                { stem: 'up' }
                            )
                        ),
                        score.notes(
                            [
                                'A4/q.',
                                'G4/8',
                                'B4/q[id="n1"]'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('2/2');

    // Measure 2
    system = vf.System({
        x: 320,
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
                            'B4/q[id="n2"]',
                            'C5/h',
                            'D5/q'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Measure 3
    system = vf.System({
        x: 500,
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
                            'G5/h[id="n3"]',
                            'G5/q[id="n4"]'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    // Render the score
    vf.draw();
})();
