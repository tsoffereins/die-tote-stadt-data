(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'robert-le-diable',
            width: 862,
            height: 120
        }
    });

    // Setup the score
    const score = vf.EasyScore();
    score.set({ time: '4/4' });

    // Measure 1
    system = vf.System({
        x: 0,
        y: 5,
        width: 220,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes('C#6/w')
                )
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({
        x: 220,
        y: 5,
        width: 160,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'G#5/h',
                            'E5/h'
                        ].join(',')
                    )
                )
            ]
        });

    // Measure 3
    system = vf.System({
        x: 380,
        y: 5,
        width: 260,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    [
                        score.notes(
                            [
                                'C#5/q.',
                                'C#5/8[id="n1"]'
                            ].join(',')
                        ),
                        score.beam(
                            score.notes(
                                [
                                    'E5/8[id="n2"]',
                                    'G#5/8[id="n3"]',
                                    'C#6/8[id="n4"]',
                                    'D#6/8[id="n5"]'
                                ].join(',')
                            )
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    makeStaccato('n1');
    makeStaccato('n2');
    makeStaccato('n3');
    makeStaccato('n4');
    makeStaccato('n5');

    // Measure 4
    system = vf.System({
        x: 640,
        y: 5,
        width: 220,
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
                                    'E6/8[id="n6"]',
                                    'C#6/8[id="n7"]'
                                ].join(',')
                            )
                        ),
                        score.notes(
                            [
                                'B4/q/r',
                                'B4/h/r'
                            ].join(',')
                        )
                    ].reduce((a, b) => a.concat(b))
                )
            ]
        });

    makeStaccato('n6');
    makeStaccato('n7');

    // Render the score
    vf.draw();

    function makeStaccato(id) {
        const staccato = new Vex.Flow.Articulation('a.');
        staccato.setPosition(Vex.Flow.Modifier.Position.ABOVE);

        registry.getElementById(id).addModifier(0, staccato);
    }
})();
