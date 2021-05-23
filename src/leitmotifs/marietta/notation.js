(function () {
    const { score, measure, notes, tuplet, beam, articulate, render } = new VF.Sheet({
        id: 'marietta',
        measureWidths: [540, 300],
        height: 160,
        offsetY: 20
    });

    score.set({ time: '3/2' });

    // Measure 1
    measure()
        .addNotes([
            tuplet(
                notes('B4/8/r'),
                beam(notes('A5/8/#1', 'G5/8/#2', 'A5/8/#3', 'D5/8/#4', 'E#5/8/#5')),
                { num_notes: 3 }
            ),
            tuplet(
                beam(notes('G4/8', 'A4/8')),
                notes('E5/h'),
                { num_notes: 3 }
            ),
            tuplet(
                beam(notes('G4/8', 'A4/8')),
                notes('G5/h'),
                { num_notes: 3 }
            ),
        ])
        .addClef('treble')
        .addKeySignature('B')
        .addTimeSignature('3/4');

    articulate([1, 2, 3, 4, 5], 'a.');

    // Measure 2
    score.set({ time: '2/2' });

    measure()
        .addNotes([
            tuplet(
                beam(notes('E#5/8', 'G5/8')),
                notes('E#6/h'),
                { num_notes: 3 }
            ),
            notes('B4/h/r')
        ]);

    render();
})();
