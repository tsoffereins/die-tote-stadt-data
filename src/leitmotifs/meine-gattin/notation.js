(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'meine-gattin',
            width: 602,
            height: 160
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '4/4' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 20,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/h/r',
                            'E5/h[id="n1"]'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('bass')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 200,
        y: 20,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.tuplet(
                        score.notes(
                            [
                                'E5/h[id="n2"]',
                                'Fb5/h[id="n3"]',
                                'Gb5/h[id="n4"]'
                            ].join(','),
                            { stem: 'up' }
                        )
                    )
                ),
                score.voice(
                    score.notes('E5/w[id="n5"]')
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2'),
        options: { invert: true }
    });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n5'),
        options: { invert: true }
    });

    // Measure 3
    system = vf.System({
        x: 400,
        y: 20,
        width: 100,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes('(E5 F5 G5 B5 D6)/w')
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3')
    });

    vf.Curve({
        from: registry.getElementById('n4'),
        options: { invert: true }
    });

    vf.Curve({
        from: registry.getElementById('n5'),
        options: { invert: true }
    });

    // Render the score
    vf.draw();
})();
