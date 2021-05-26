(function () {
    const { measure, notes, beam, tuplet, articulate, render } = new VF.Sheet({
        id: 'four-beats',
        measureWidths: [240]
    });

    // Measure 1
    measure('2/4')
        .addNotes([
            tuplet(
                beam(notes('(A#4 D5 F5)/8/#1', '(A4 D5 F5)/8/#2', '(A4 D5 F5)/8/#3')),
                { y_offset: -10 }
            ),
            notes('(A4 D5 F5)/8/#4', 'B4/8/r')
        ])
        .addClef('bass')
        .addTimeSignature('2/4');

    articulate(1, 'a>');
    articulate([2, 3, 4], 'a.');

    render();
})();
