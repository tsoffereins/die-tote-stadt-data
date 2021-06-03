(function () {
    const { measure, notes, beam, find, curve, render } = new VF.Sheet({
        id: 'schaume',
        measureWidths: [200, 220, 120],
        offsetY: 20
    });

    // Measure 1
    measure('3/8')
        .addNotes([
            notes('B4/8/r'),
            beam(notes('(G5 B5 D6)/16', 'E6/16', '(A5 C6 F6)/8/#1'))
        ])
        .addClef('treble')
        .addKeySignature('G')
        .addTimeSignature('6/8');

    find(1).addAccidental(2, new VF.Accidental('n'));

    // Measure 2
    measure('6/8')
        .addNotes([
            beam(notes('(G5 B5 D6)/16', 'E6/16', '(A5 C6 F6)/q/#2')),
            notes('(A5 C6 F6)/q./#3')
        ]);

    find(2).addAccidental(2, new VF.Accidental('n'));
    curve(2, 3);

    // Measure 3
    measure('3/8')
        .addNotes([
            notes('(A5 C6 F6)/8/#4', 'B4/q/r')
        ]);

    curve(3, 4);

    render();
})();
