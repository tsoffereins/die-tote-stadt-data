(function () {
    const { score, measure, notes, tuplet, beam, articulate, render } = new VF.Sheet({
        id: 'tanzerin',
        measureWidths: [360, 280]
    });

    score.set({ time: '2/2' });

    // Measure 1
    measure()
        .addNotes([
            tuplet(
                beam(notes('C5/8/#1', 'C5/8/#2')),
                notes('C5/h/#3'),
                { num_notes: 3 }
            ),
            tuplet(
                beam(notes('D#5/8/#4', 'D#5/8/#5')),
                notes('D#5/h/#6'),
                { num_notes: 3 }
            )
        ])
        .addClef('bass')
        .addTimeSignature('2/2');

    articulate([1, 2, 4, 5], 'a.');
    articulate([3, 6], 'a-');

    // Measure 2
    measure()
        .addNotes([
            tuplet(
                beam(notes('E#5/8/#4', 'F#5/8/#5')),
                notes('G5/h/#6'),
                { num_notes: 3 }
            ),
            notes('B4/h/r')
        ]);

    render();
})();
