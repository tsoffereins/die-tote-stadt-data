(function () {
    const { measure, notes, find, beam, curve, tuplet, articulate, render } = new VF.Sheet({
        id: 'da-bist-du-ja-marie',
        measureWidths: [140, 260, 200, 240, 240, 240, 240, 200]
    });

    // Measure 1
    measure('1/8')
        .addNotes([
            notes('Cb5/8')
        ])
        .addClef('treble')
        .addKeySignature('F')
        .addTimeSignature('4/4');

    // Measure 2
    measure('4/4')
        .addNotes([
            beam(notes('Cb5/16', 'B4/8')),
            notes('C5/16/#1', 'D5/q/#2', 'D5/8/#3', 'F5/8', 'F5/q/#4')
        ]);

    find(1).addAccidental(0, new VF.Accidental('n'));
    curve(2, 3);

    // Measure 3
    measure()
        .addNotes([
            notes('F5/h/#5', 'F5/8/#6', 'B4/8/r'),
            tuplet(notes('B4/q/r', 'B4/8'), { num_notes: 3 })
        ]);

    curve(4, 5);
    curve(5, 6);

    // Measure 4
    measure()
        .addNotes([
            tuplet(notes('C5/q', 'D5/8'), { num_notes: 3 }),
            notes('C5/h/#7', 'C5/8/#8', 'B4/8/r')
        ]);

    curve(7, 8);

    // Measure 5
    measure()
        .addNotes([
            notes('B4/h/r', 'A4/q/#9'),
            tuplet(notes('A4/q/#10', 'B4/8'), { num_notes: 3 })
        ]);

    curve(9, 10);

    // Measure 6
    measure()
        .addNotes([
            tuplet(notes('C5/q', 'D5/8'), { num_notes: 3 }),
            notes('E5/q/#11', 'E5/h/#12')
        ]);

    curve(11, 12);

    // Measure 7
    measure()
        .addNotes([
            notes('F5/h', 'E5/8/#13', 'D5/8/#14', 'C5/8/#15', 'D5/8/#16')
        ]);

    articulate([13, 14, 15, 16], 'a-');

    // Measure 8
    measure()
        .addNotes([
            notes('E5/h/#17', 'E5/q/#18', 'B4/q/r')
        ]);

    curve(17, 18);

    render();
})();
