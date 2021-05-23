(function () {
    const { score, measure, notes, tuplet, beam, curve, render } = new VF.Sheet({
        id: 'brugge',
        measureWidths: [320, 120, 240, 120, 240, 120, 220, 220, 220, 220, 120, 180],
        height: 140
    });

    score.set({ time: '2/2' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/q/r', 'B4/8/r', 'D4/8', 'F4/q/#1', 'F4/8/#2', 'B4/8/r')
        ])
        .addClef('treble')
        .addKeySignature('F#')
        .addTimeSignature('2/2');

    curve(1, 2);

    // Measure 2
    measure()
        .addNotes([
            notes('C4/w/#3')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('C4/4/#4', 'B4/8/r', 'D4/8', 'F4/q/#5', 'F4/8/#6', 'B4/8/r')
        ]);

    curve(3, 4);
    curve(5, 6);

    // Measure 4
    measure()
        .addNotes([
            notes('C4/w/#7')
        ]);

    // Measure 5
    measure()
        .addNotes([
            notes('C4/8/#8', 'B4/4/r', 'D4/8', 'A4/q', 'B4/8/r', 'F4/8')
        ]);

    curve(7, 8);

    // Measure 6
    measure()
        .addNotes([
            notes('C5/w/#9')
        ]);

    curve(9, 10);

    // Measure 7
    measure()
        .addNotes([
            tuplet(notes('C5/q/#10', 'D5/q', 'G4/q')),
            notes('F4/q', 'B4/8/r', 'C4/8'),
        ]);

    // Measure 8
    measure()
        .addNotes([
            notes('D4/q/#11', 'D4/8/#12', 'B4/8/r', 'A3/h/#13')
        ]);

    curve(11, 12);

    // Measure 9
    measure()
        .addNotes([
            tuplet(notes('A3/h/#14', 'G3/q'), { num_notes: 3 }),
            notes('A3/h/#15'),
        ]);

    curve(13, 14);

    // Measure 10
    measure()
        .addNotes([
            tuplet(notes('A3/q/#16', 'C4/q', 'G3/q')),
            tuplet(notes('F3/q', 'B4/q/r'), beam(notes('G3/8', 'E3/8')), { num_notes: 3 })
        ]);

    curve(15, 16);

    // Measure 11
    measure()
        .addNotes([
            notes('A3/w/#17')
        ]);

    // Measure 13
    measure()
        .addNotes([
            notes('A3/q/#18', 'B4/q/r', 'B4/h/r')
        ]);

    curve(17, 18);

    render();
})();
