(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'love-faithful-love',
            width: 1442,
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
                    score.notes(
                        [
                            'B4/h/r',
                            'B4/q[id="n1"]',
                            'C#5/q'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    registry.getElementById('n1')
        .addAccidental(0, new Vex.Flow.Accidental('n'));

    // Measure 2
    system = vf.System({
        x: 280,
        y: 0,
        width: 180,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes('D#5/h[id="n1"]'),
                        score.tuplet(
                            score.notes(
                                [
                                    'D5/h[id="n2"]',
                                    'D5/q'
                                ].join(',')
                            ),
                            { num_notes: 3 }
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
        x: 460,
        y: 0,
        width: 220,
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
                                    'D#5/q',
                                    'E5/q',
                                    'F#5/q'
                                ].join(',')
                            )
                        ),
                        score.notes(
                            [
                                'E5/q.',
                                'D5/8'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    // Measure 4
    system = vf.System({
        x: 680,
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
                            'D#5/q',
                            'C#5/h[id="n3"]',
                            'C5/8[id="n4"]',
                            'C5/8',
                        ].join(',')
                    )
                )
            ]
        });

    vf.Curve({
        from: registry.getElementById('n3'),
        to: registry.getElementById('n4')
    });

    // Measure 5
    score.set({ time: '3/4' });

    system = vf.System({
        x: 920,
        y: 0,
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'C5/q[id="n5"]',
                            'B4/h[id="n6"]'
                        ].join(',')
                    )
                )
            ]
        })
        .addTimeSignature('3/4');

    const graceNotes = new Vex.Flow.GraceNoteGroup([
        new Vex.Flow.GraceNote({ keys: ['C#/5'], duration: '16' })
            .addAccidental(0, new Vex.Flow.Accidental("#")),
        new Vex.Flow.GraceNote({ keys: ['D#/5'], duration: '16' })
            .addAccidental(0, new Vex.Flow.Accidental("#"))
    ], true);

    registry.getElementById('n5')
        .addModifier(0, graceNotes.beamNotes());

    registry.getElementById('n6')
        .setXShift(30);

    // Measure 6
    score.set({ time: '4/4' });

    system = vf.System({
        x: 1180,
        y: 0,
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/q[id="n7"]',
                            'B4/8[id="n8"]',
                            'B4/8/r',
                            'B4/h/r'
                        ].join(',')
                    )
                )
            ]
        })
        .addTimeSignature('4/4');

    vf.Curve({
        from: registry.getElementById('n7'),
        to: registry.getElementById('n8')
    });

    // Render the score
    vf.draw();
})();
