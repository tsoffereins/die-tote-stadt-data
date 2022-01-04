(function () {
    const { measure, notes, render, curve, beam } = new VF.Sheet({
        id: 'procession',
        measureWidths: [200, 200, 200, 200, 200, 200, 200, 240, 200]
    });

    // Measure 1
    measure('6/8')
        .addNotes([
            notes('B4/q/r.', 'B4/q/r', 'G#4/8')
        ])
        .addClef('treble')
        .addTimeSignature('6/8');

    // Measure 2
    measure()
        .addNotes([
            notes('A#4/q', 'G#4/8'),
            beam(notes('F#4/8.', 'G4/16')),
            notes('A4/8')
        ]);

    // Measure 3
    measure('9/8')
        .addNotes([
            notes('G#4/h./#1', 'G4/q/#2', 'G4/8')
        ])
        .addTimeSignature('9/8');

    curve(1, 2);

    // Measure 4
    measure('6/8')
        .addNotes([
            notes('A#4/q', 'G#4/8'),
            beam(notes('F#4/8.', 'G4/16')),
            notes('A4/8')
        ])
      .addTimeSignature('6/8');

    // Measure 5
    measure('9/8')
        .addNotes([
            notes('G#4/h./#3', 'G4/q/#4', 'G4/8')
        ])
        .addTimeSignature('9/8');

    curve(3, 4);

    // Measure 6
    measure('6/8')
      .addNotes([
          notes('G#4/q', 'G4/8'),
          beam(notes('G4/8.', 'A#4/16')),
          notes('B4/8')
      ])
      .addTimeSignature('6/8');

    // Measure 7
    measure()
      .addNotes([
          notes('F#4/q./#5', 'F4/8/#6', 'G#4/q')
      ]);

    curve(5, 6);

    // Measure 8
    measure()
      .addNotes([
          beam(notes('B4/8.', 'A#4/16', { stem: 'up' })),
          notes('G#4/8'),
          beam(notes('A4/8.', 'G4/16')),
          notes('F#4/8')
      ]);

    // Measure 9
    measure()
      .addNotes([
          notes('G#4/h.')
      ]);

    render();
})();
