(function () {
    const { measure, notes, render, tuplet, beam, curve, articulate, find } = new VF.Sheet({
        id: 'von-lust-und-von-liebe',
        measureWidths: [200, 240, 240, 140, 140]
    });

    // Measure 1
    measure('2/4')
        .addNotes([
            notes('B4/q/r', 'B4/8/r', 'B4/8/#1'),
            // tuplet(notes('B4/8/r', 'F#4/8/#1'), { num_notes: 2, notes_occupied: 3 })
        ])
        .addClef('treble')
        .addTimeSignature('2/4');

    articulate(1, 'a.', VF.Modifier.Position.BELOW);
    articulate(1, 'a>', VF.Modifier.Position.BELOW);

    // Measure 2
    measure()
      .addNotes([
        notes('F#5/q/#2'),
        tuplet(
          notes('F#5/q/#3'),
          beam(notes('D#5/16', 'A#4/16', { stem: 'down' })),
          {
            num_notes: 3,
            notes_occupied: 2
          }
        )
      ]);

    curve(2, 3);

  // Measure 3
  measure()
    .addNotes([
      notes('G#4/q/#4', 'G4/8/#5', 'B4/16/r', 'F4/16')
    ]);

  curve(4, 5);

  find(5).addAccidental(0, new VF.Accidental('n'));

  // Measure 4
  measure()
    .addNotes([
      notes('C#5/h')
    ]);

  // Measure 5
  measure()
    .addNotes([
      notes('C#4/h')
    ]);

    render();
})();
