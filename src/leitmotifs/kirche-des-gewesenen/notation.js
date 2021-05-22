(function () {
    const { score, measure, notes, curve, render } = new VF.Sheet({
        id: 'kirche-des-gewesenen',
        measureWidths: [160, 120, 240, 220, 160]
    });

    score.set({ time: '3/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('C#5/h.')
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            notes('G#4/h.[id="n1"]')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('G4/8[id="n2"]', 'A#4/q', 'F#4/8', 'C#5/q[id="n3"]')
        ]);

    curve('n1', 'n2');

    // Measure 4
    measure()
        .addNotes([
            notes('C#5/h[id="n4"]', 'C#5/8[id="n5"]', 'C#4/8')
        ]);

    curve('n2', 'n4');
    curve('n4', 'n5');

    // Measure 4
    measure()
        .addNotes([
            notes('C#4/q', 'B4/q/r', 'B4/q/r')
        ]);

    render();
})();
