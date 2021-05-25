(function () {
    const { measure, notes, tuplet, curve, render } = new VF.Sheet({
        id: 'marie',
        measureWidths: [280, 300, 260]
    });

    // Measure 1
    measure('2/2')
        .addNotes([
            tuplet(notes('F4/h', 'Eb4/q/#1'), { num_notes: 3 }),
            tuplet(notes('E4/q/#n2', 'Db4/q', 'E4/q'))
        ])
        .addClef('treble')
        .addTimeSignature('2/2');

    curve(1, 2);

    // Measure 2
    measure()
        .addNotes([
            tuplet(notes('F4/q', 'Gb4/q', 'Ab4/q/#3')),
            tuplet(notes('A4/q/#4', 'Bb4/q.', 'C5/8'), { num_notes: 3 })
        ]);

    curve(3, 4);

    // Measure 3
    measure()
        .addNotes([
            tuplet(notes('Db5/h', 'F5/q/#5'), { num_notes: 3 }),
            tuplet(notes('F5/q/#6', 'D5/h'), { num_notes: 3 })
        ]);

    render();
})();
