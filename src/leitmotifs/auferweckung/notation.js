(function () {
    const {  measure, notes, find, render } = new VF.Sheet({
        id: 'auferweckung',
        measureWidths: [240, 280]
    });

    // Measure 1
    measure('3/4')
        .addNotes([
            notes('B4/h/r', '(C5 D5 F#5 A5 D6)/4/#1')
        ])
        .addClef('treble')
        .addKeySignature('Bb')
        .addTimeSignature('3/4');

    find(1).addStroke(0, new VF.Stroke(7));

    // Measure 2
    measure()
        .addNotes([
            notes(
                '(B4 D5 F5 B5)/4/#2',
                '(E4 F4 A4 C#5 F5)/4/#3',
                'B4/q/r'
            )
        ]);

    find(2).addAccidental(2, new VF.Accidental('n'));
    find(2).addStroke(0, new VF.Stroke(7));
    find(3).addAccidental(0, new VF.Accidental('n'));
    find(3).addStroke(0, new VF.Stroke(7));

    render();
})();
