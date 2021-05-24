(function () {
    const { measure, notes, curve, find, render } = new VF.Sheet({
        id: 'mein-sehnen',
        measureWidths: [220, 120, 120, 120, 120, 160, 120]
    });

    // Measure 1
    measure('3/4')
        .addNotes([
            notes('B4/q/r', 'B4/q/r', 'F5/q')
        ])
        .addClef('bass')
        .addKeySignature('Db')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            notes('A5/q', 'G5/h/#1')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('G5/8/#2', 'B4/8/r', 'E5/h/#3')
        ]);

    curve(1, 2);

    find(3).addAccidental(0, new VF.Accidental('n'));

    // Measure 4
    measure()
        .addNotes([
            notes('B5/q', 'A5/h/#4')
        ]);

    // Measure 5
    measure()
        .addNotes([
            notes('A5/q/#5', 'F5/h')
        ]);

    curve(4, 5);

    // Measure 6
    measure()
        .addNotes([
            notes('C6/q.', 'B5/8', 'B5/q')
        ]);

    // Measure 7
    measure()
        .addNotes([
            notes('B5/h', 'B4/q/r')
        ]);

    // Render the score
    render();
})();
