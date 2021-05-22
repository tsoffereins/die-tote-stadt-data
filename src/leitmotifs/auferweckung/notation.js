(function () {
    const { score, measure, notes, find, render } = new VF.Sheet({
        id: 'auferweckung',
        measureWidths: [240, 280]
    });

    score.set({ time: '3/4' });

    // Measure 1
    measure()
        .addNotes([
            notes(
                'B4/h/r',
                '(C5 D5 F#5 A5 D6)/4[id="n1"]'
            )
        ])
        .addClef('treble')
        .addKeySignature('Bb')
        .addTimeSignature('3/4');

    find('n1').addStroke(0, new VF.Stroke(7));

    // Measure 2
    measure()
        .addNotes([
            notes(
                '(B4 D5 F5 B5)/4[id="n2"]',
                '(E4 F4 A4 C#5 F5)/4[id="n3"]',
                'B4/q/r'
            )
        ]);

    find('n2').addAccidental(2, new VF.Accidental('n'));
    find('n2').addStroke(0, new VF.Stroke(7));
    find('n3').addAccidental(0, new VF.Accidental('n'));
    find('n3').addStroke(0, new VF.Stroke(7));

    render();
})();
