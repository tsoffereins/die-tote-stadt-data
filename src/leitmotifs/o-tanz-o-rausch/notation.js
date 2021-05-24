(function () {
    const { score, measure, notes, tuplet, beam, curve, articulate, render } = new VF.Sheet({
        id: 'o-tanz-o-rausch',
        measureWidths: [200, 120, 160, 160, 160]
    });

    score.set({ time: '3/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/q/r', 'B3/h')
        ])
        .addClef('bass')
        .addKeySignature('E')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            tuplet(
                notes('C4/q/#1'),
                beam(notes('D4/8/#2', 'E4/8/#3')),
                {
                    num_notes: 2,
                    notes_occupied: 3,
                    y_offset: -10
                }
            )
        ]);

    articulate([1, 2, 3], 'a>', VF.Modifier.Position.BELOW);

    // Measure 3
    measure()
        .addNotes([
            notes('C4/q/#4', 'D4/q/#5'),
            beam(notes('F4/8/#6', 'E4/8/#7'))
        ]);

    articulate([4, 5, 6, 7], 'a>', VF.Modifier.Position.BELOW);

    // Measure 4
    measure()
        .addNotes([
            notes('B4/h/#8', 'C5/q/#9')
        ]);

    articulate([8, 9], 'a>');

    // Measure 5
    measure()
        .addNotes([
            notes('C5/q/#10', 'E5/h/#11')
        ])

    articulate([11], 'a>');
    curve(9, 10);

    render();
})();
