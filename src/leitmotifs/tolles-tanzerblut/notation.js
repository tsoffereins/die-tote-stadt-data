(function () {
    const { measure, notes, curve, render } = new VF.Sheet({
        id: 'tolles-tanzerblut',
        measureWidths: [240, 200, 200, 200, 200, 200, 160, 200]
    });

    // Measure 1
    measure('2/4')
        .addNotes([
            notes('B4/q/r', 'D5/8', 'E5/8')
        ])
        .addClef('treble')
        .addKeySignature('F')
        .addTimeSignature('2/4');

    // Measure 2
    measure()
        .addNotes([
            notes('G5/8.', 'E5/16', 'D5/q/#1')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('D5/q/#2', 'D5/8', 'E5/8')
        ]);

    curve(1, 2);

    // Measure 4
    measure()
        .addNotes([
            notes('G5/8.', 'E5/16', 'D5/q/#3')
        ]);

    // Measure 5
    measure()
        .addNotes([
            notes('D5/q/#4', 'D5/8', 'E5/8')
        ]);

    curve(3, 4);

    // Measure 6
    measure()
        .addNotes([
            notes('G5/8.', 'E5/16', 'D5/8.', 'C5/16')
        ]);

    // Measure 7
    measure()
        .addNotes([
            notes('B4/q', 'A4/q')
        ]);

    // Measure 8
    measure()
        .addNotes([
            notes('B4/8', 'G4/q.')
        ]);

    render();
})();
