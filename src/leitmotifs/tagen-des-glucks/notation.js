(function () {
    const { measure, notes, beam, curve, tuplet, find, render } = new VF.Sheet({
        id: 'tagen-des-glucks',
        measureWidths: [300, 260, 160, 200, 220, 160, 140, 140]
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('G4/h/#1'),
            tuplet(notes('G4/q/#2', 'Ab4/q', 'Bb4/q'))
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    curve(1, 2);

    // Measure 2
    measure()
        .addNotes([
            notes('Ab4/q'),
            beam(notes('G4/8', 'A4/8')),
            tuplet(notes('G4/h/#3', 'F4/q'), { num_notes: 3 })
        ]);


    const graceNotes = new VF.GraceNoteGroup([
        new VF.GraceNote({ keys: ['G/4'], duration: '16' }),
        new VF.GraceNote({ keys: ['A/4'], duration: '16' })
    ], true);

    find(3).addModifier(0, graceNotes.beamNotes());

    // Measure 3
    measure()
        .addNotes([
             notes('Bb4/w')
        ]);

    // Measure 4
    measure()
        .addNotes([
             notes('Ab4/q', 'Bb4/q.', 'C5/q', 'D5/8')
        ]);

    // Measure 5
    measure()
        .addNotes([
             notes('Bb4/q', 'Eb5/h', 'B4/4')
        ]);

    // Measure 6
    measure()
        .addNotes([
             notes('Ab4/h', 'G4/h')
        ]);

    // Measure 7
    measure()
        .addNotes([
             notes('F4/w/#4')
        ]);

    // Measure 8
    measure()
        .addNotes([
             notes('F4/h/#5', 'B4/h/r')
        ]);

    curve(4, 5);

    render();
})();
