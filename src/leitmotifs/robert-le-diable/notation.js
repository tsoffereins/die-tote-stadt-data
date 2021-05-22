(function () {
    const { score, measure, notes, beam, find, render } = new VF.Sheet({
        id: 'robert-le-diable',
        measureWidths: [220, 160, 260, 220],
        offsetY: 5
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
             notes('C#6/w')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('G#5/h', 'E5/h')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('C#5/q.', 'C#5/8[id="n1"]'),
            beam(notes('E5/8[id="n2"]', 'G#5/8[id="n3"]', 'C#6/8[id="n4"]', 'D#6/8[id="n5"]'))
        ]);

    staccato('n1');
    staccato('n2');
    staccato('n3');
    staccato('n4');
    staccato('n5');

    // Measure 4
    measure()
        .addNotes([
            beam(notes('E6/8[id="n6"]', 'C#6/8[id="n7"]')),
            notes('B4/q/r', 'B4/h/r')
        ]);

    staccato('n6');
    staccato('n7');

    render();

    /**
     * @param {string} id
     */
    function staccato(id) {
        const staccato = new VF.Articulation('a.');
        staccato.setPosition(VF.Modifier.Position.ABOVE);

        find(id).addModifier(0, staccato);
    }
})();
