(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'gluck-das-mir-verblieb',
            width: 1142,
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
        width: 340,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/q',
                            'C5/h',
                            'A4/8.',
                            'B4/16'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    score.set({ time: '3/4' });

    system = vf.System({
        x: 340,
        y: 0,
        width: 300,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G4/h',
                            'A4/8.',
                            'B4/16'
                        ].join(',')
                    )
                )
            ]
        })
        .addTimeSignature('3/4');

    // Measure 3
    system = vf.System({
        x: 640,
        y: 0,
        width: 220,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'C5/q',
                            'D5/h'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 4
    system = vf.System({
        x: 860,
        y: 0,
        width: 280,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.tuplet(
                            score.notes(
                                [
                                    'B4/8',
                                    'A4/8',
                                    'B4/8[id="n1"]'
                                ].join(',')
                            )
                        ),
                        score.notes('B4/h[id="n2"]')
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Render the score
    vf.draw();
})();
