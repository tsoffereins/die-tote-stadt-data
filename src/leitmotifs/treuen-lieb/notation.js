(function () {
    const { measure, notes, tuplet, curve, find, render } = new VF.Sheet({
        id: 'treuen-lieb',
        measureWidths: [280, 180, 220, 240, 260, 160]
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/h/r', 'B4/q/#1', 'C#5/q')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    find(1).addAccidental(0, new VF.Accidental('n'));

    // Measure 2
    measure()
        .addNotes([
            notes('D#5/h/#1'),
            tuplet(notes('D5/h/#2', 'D5/q'), { num_notes: 3 })
        ]);

    curve(1, 2);

    // Measure 3
    measure()
        .addNotes([
            tuplet(notes('D#5/q', 'E5/q', 'F#5/q')),
            notes('E5/q.', 'D5/8')
        ]);

    // Measure 4
    measure()
        .addNotes([
            notes('D#5/q', 'C#5/h/#3', 'C5/8/#4', 'C5/8')
        ]);

    curve(3, 4);

    // Measure 5
    measure( '3/4')
        .addNotes([
            notes('C5/q/#5', 'B4/h/#6')
        ])
        .addTimeSignature('3/4');

    const graceNotes = new VF.GraceNoteGroup([
        new VF.GraceNote({ keys: ['C#/5'], duration: '16' })
            .addAccidental(0, new VF.Accidental("#")),
        new VF.GraceNote({ keys: ['D#/5'], duration: '16' })
            .addAccidental(0, new VF.Accidental("#"))
    ], true);

    find(5).addModifier(0, graceNotes.beamNotes());
    find(6).setXShift(30);

    // Measure 6
    measure()
        .addNotes([
            notes('B4/h.')
        ]);

    render();
})();
