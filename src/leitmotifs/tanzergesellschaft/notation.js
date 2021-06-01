(function () {
    const { measure, notes, beam, articulate, tuplet, curve, find, render } = new VF.Sheet({
        id: 'tanzergesellschaft',
        measureWidths: [360, 340],
        offsetY: 35,
        height: 140
    });

    // Measure 1
    measure('2/4')
        .addNotes([
            notes('B4/8/r'),
            beam(notes('A#6/16/#1', 'G6/16', 'F6/16', 'E6/16', 'F6/32', 'E6/32', 'D6/32', 'C6/32/#2'))
        ])
        .addClef('treble')
        .addKeySignature('A')
        .addTimeSignature('4/4');

    articulate(1, 'a>')
    find(2).addAccidental(0, new VF.Accidental('n'));

    // Measure 2
    measure('4/4')
        .addNotes([
            tuplet(beam(notes('D6/8/#3', 'A#5/8/#4', 'G5/8/#5'))),
            tuplet(notes('A5/8', 'F5/q/#6'), { num_notes: 3 }),
            notes('F5/h/#7')
        ]);

    articulate([3, 4, 5], 'a.');
    curve(6, 7);

    render();
})();
