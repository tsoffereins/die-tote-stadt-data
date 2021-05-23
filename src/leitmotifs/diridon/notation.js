(function () {
    const { score, measure, notes, find, beam, render } = new VF.Sheet({
        id: 'diridon',
        measureWidths: [300, 220, 220, 260, 220]
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/h/r', 'B4/q/r'),
            beam(notes('C5/8', 'D5/8'))
        ])
        .addClef('treble')
        .addKeySignature('Ab')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('E5/q'),
            beam(notes('D5/8', 'C5/8')),
            notes('B4/q'),
            beam(notes('C5/8', 'D5/8'))
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('E5/q.', 'G5/8', 'A4/4'),
            beam(notes('B4/8', 'C5/8'))
        ]);

    // Measure 4
    measure()
        .addNotes([
            beam(notes('B4/8.', 'C5/16')),
            beam(notes('D5/8/#1', 'E5/8')),
            beam(notes('F5/8.', 'G5/16')),
            beam(notes('A5/8', 'B5/8'))
        ]);

    find(1).addAccidental(0, new Vex.Flow.Accidental('n'));

    // Measure 5
    measure()
        .addNotes([
            notes('G5/q', 'F5/q', 'E5/h')
        ]);

    render();
})();
