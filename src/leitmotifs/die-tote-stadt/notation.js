(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'die-tote-stadt',
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
                    [
                        score.notes(
                            [
                                'B4/8/r',
                                'F4/8'
                            ].join(',')
                        ),
                        score.tuplet(
                            score.notes(
                                [
                                    'C5/q',
                                    'A4/8'
                                ].join(',')
                            ),
                            { num_notes: 3 }
                        ),
                        score.notes(
                            [
                                'E5/q[id="n1"]',
                                'E5/8[id="n2"]',
                                'B4/8/r'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Render the score
    vf.draw();
})();
