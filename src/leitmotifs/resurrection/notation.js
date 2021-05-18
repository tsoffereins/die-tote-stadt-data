(function () {
    let system;

    const registry = new Vex.Flow.Registry();
    Vex.Flow.Registry.enableDefaultRegistry(registry);

    // Configure the canvas
    const vf = new Vex.Flow.Factory({
        renderer: {
            elementId: 'resurrection',
            width: 522,
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
        width: 240,
        spaceBetweenStaves: 10
    });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        [
                            'B4/h/r',
                            '(C5 D5 F#5 A5 D6)/4[id="n1"]'
                        ].join(',')
                    )
                )
            ]
        })
        .addClef('treble')
        .addKeySignature('Bb')
        .addTimeSignature('3/4');

    registry.getElementById('n1')
        .addStroke(0, new Vex.Flow.Stroke(7));

    // Measure 2
    system = vf.System({
        x: 240,
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
                            '(B4 D5 F5 B5)/4[id="n2"]',
                            '(E4 F4 A4 C#5 F5)/4[id="n3"]',
                            'B4/q/r'
                        ].join(',')
                    )
                )
            ]
        });

    registry.getElementById('n2')
        .addAccidental(2, new Vex.Flow.Accidental('n'));

    registry.getElementById('n2')
        .addStroke(0, new Vex.Flow.Stroke(7));

    registry.getElementById('n3')
        .addAccidental(0, new Vex.Flow.Accidental('n'));

    registry.getElementById('n3')
        .addStroke(0, new Vex.Flow.Stroke(7));

    // Render the score
    vf.draw();
})();
