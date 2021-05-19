(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'schaume',
            width: 1602,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '2/4' });

    // Measure 1
    system = vf.System({
        x: 0,
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
                            'B4/q/r',
                            'D5/8',
                            'E5/8'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addKeySignature('F')
        .addTimeSignature('2/4');

    // Measure 2
    system = vf.System({
        x: 240,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G5/8.',
                            'E5/16',
                            'D5/q[id="n1"]'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 3
    system = vf.System({
        x: 440,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'D5/q[id="n2"]',
                            'D5/8',
                            'E5/8',
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
        x: 640,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G5/8.',
                            'E5/16',
                            'D5/q[id="n3"]'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 5
    system = vf.System({
        x: 840,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'D5/q[id="n4"]',
                            'D5/8',
                            'E5/8',
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    // Measure 6
    system = vf.System({
        x: 1040,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G5/8.',
                            'E5/16',
                            'D5/8.',
                            'C5/16'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 7
    system = vf.System({
        x: 1240,
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
                            'B4/q',
                            'A4/q'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 7
    system = vf.System({
        x: 1400,
        y: 0,
        width: 200,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/8',
                            'G4/q.'
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
