(function () {
    const { measure, notes, curve, render } = new VF.Sheet({
        id: 'bells-2-variation',
        measureWidths: [100, 180, 200]
    });

    // Measure 1
    measure('1/4')
        .addNotes([
            notes('G5/q')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure('4/4')
        .addNotes([
            notes('C5/h', 'D5/q.', 'D5/8')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('D5/8', 'F4/q./#1', 'F4/h/#2')
        ]);

    curve(1, 2);

    render();
})();
