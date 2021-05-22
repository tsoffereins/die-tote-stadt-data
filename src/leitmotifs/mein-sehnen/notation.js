(function () {
    const { score, measure, notes, curve, find, render } = new VF.Sheet({
        id: 'mein-sehnen',
        measureWidths: [220, 120, 120, 120, 120, 160, 120]
    });

    score.set({ time: '3/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/q/r', 'B4/q/r', 'F5/q')
        ])
        .addClef('bass')
        .addKeySignature('Db')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            notes('A5/q', 'G5/h[id="n1"]')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('G5/8[id="n2"]', 'B4/8/r', 'E5/h[id="n3"]')
        ]);

    curve('n1', 'n2');

    find('n3').addAccidental(0, new VF.Accidental('n'));

    // Measure 4
    measure()
        .addNotes([
            notes('B5/q', 'A5/h[id="n4"]')
        ]);

    // Measure 5
    measure()
        .addNotes([
            notes('A5/q[id="n5"]', 'F5/h')
        ]);

    curve('n4', 'n5');

    // Measure 6
    measure()
        .addNotes([
            notes('C6/q.', 'B5/8', 'B5/q')
        ]);

    // Measure 7
    measure()
        .addNotes([
            notes('B5/h', 'B4/q/r')
        ]);

    // Render the score
    render();
})();
