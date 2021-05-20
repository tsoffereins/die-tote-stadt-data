(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'kirche-des-gewesenen',
            width: 902,
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
        width: 160,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes('C#5/h.')
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    system = vf.System({
        x: 160,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes('G#4/h.[id="n1"]')
                )
            ]
        });

    // Measure 3
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
                    score.notes(
                        [
                            'G4/8[id="n2"]',
                            'A#4/q',
                            'F#4/8',
                            'C#5/q[id="n3"]'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    // Measure 4
    system = vf.System({
        x: 520,
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
                            'C#5/h[id="n4"]',
                            'C#5/8[id="n5"]',
                            'C#4/8'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    vf.Curve({
        from: registry.getElementById('n4'),
        to: registry.getElementById('n5')
    });

    // Measure 4
    system = vf.System({
        x: 740,
        y: 0,
        width: 160,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'C#4/q',
                            'B4/q/r',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
