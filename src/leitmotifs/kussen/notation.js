(function () {
    const { measure, notes, curve, render, articulate } = new VF.Sheet({
        id: 'kussen',
        measureWidths: [160, 160, 160, 160]
    });

    // Measure 1
    measure('2/4')
        .addNotes([
            notes('B4/8/r', 'C5/8', 'D5/q/#1')
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure('2/4')
        .addNotes([
            notes('D5/8/#2', 'B4/8/r', 'C5/q/#3')
        ])
        .addTimeSignature('2/4');

    curve(1, 2);

    // Measure 3
    measure('3/4')
        .addNotes([
            notes('C5/8/#4', 'B4/8/r', 'D5/q/#5', 'C5/q/#6')
        ])
        .addTimeSignature('3/4')

    curve(3, 4);
    articulate([5, 6], 'a.');

    // Measure 4
    measure()
        .addNotes([
            notes('Eb5/h.')
        ]);

    render();
})();
