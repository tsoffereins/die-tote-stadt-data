(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'mein-sehnen',
            width: 982,
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
        width: 220,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/q/r',
                            'B4/q/r',
                            'F5/q'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('bass')
        .addKeySignature('Db')
        .addTimeSignature('3/4');

    // Measure 2
    system = vf.System({
        x: 220,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'A5/q',
                            'G5/h[id="n1"]'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 3
    system = vf.System({
        x: 340,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G5/8[id="n2"]',
                            'B4/8/r',
                            'E5/h[id="n3"]'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n1'),
        to: registry.getElementById('n2')
    });

    registry.getElementById('n3')
        .addAccidental(0, new Vex.Flow.Accidental('n'));

    // Measure 4
    system = vf.System({
        x: 460,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B5/q',
                            'A5/h[id="n4"]'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 5
    system = vf.System({
        x: 580,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'A5/q[id="n5"]',
                            'F5/h'
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n4'),
        to: registry.getElementById('n5')
    });

    // Measure 6
    system = vf.System({
        x: 700,
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
                            'C6/q.',
                            'B5/8',
                            'B5/q'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 7
    system = vf.System({
        x: 860,
        y: 0,
        width: 120,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B5/h',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
