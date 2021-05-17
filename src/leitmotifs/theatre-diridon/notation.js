(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'theatre-diridon',
            width: 1220,
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
        width: 300,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/h/r',
                            'B4/q/r',
                            'C5/8',
                            'D5/8'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addKeySignature('Ab')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 300,
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
                            'E5/q',
                            'D5/8',
                            'C5/8',
                            'B4/q',
                            'C5/8',
                            'D5/8'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 3
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
                            'E5/q.',
                            'G5/8',
                            'A4/4',
                            'B4/8',
                            'C5/8'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 4
    system = vf.System({
        x: 740,
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
                            'B4/8.',
                            'C5/16',
                            'D5/8[id="n1"]',
                            'E5/8',
                            'F5/8.',
                            'G5/16',
                            'A5/8',
                            'B5/8',
                        ].join(',')
                    )
                )
            ]
        });

    registry.getElementById('n1').addAccidental(0, new Vex.Flow.Accidental('n'));

    // Measure 5
    system = vf.System({
        x: 1000,
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
                            'G5/q',
                            'F5/q',
                            'E5/h',
                        ].join(',')
                    )
                )
            ]
        });

    // Render the score
    vf.draw();
})();
