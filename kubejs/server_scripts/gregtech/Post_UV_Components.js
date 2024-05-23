ServerEvents.recipes(event => {
    const converter = [
        ['uev', 'omnium', 'netherite', '1966080'],
        ['uiv', 'infinity', 'holmium', '3932160'],
        ['max', 'monium', 'monium', '80000000'],
    ]
    // no MAX tier laserhatch :1984:
    const laserhatch = [
        ['uev', 'netherite', '1966080'],
        ['uiv', 'holmium', '3932160'],
    ]
    if (!isHarderMode) {
        converter.forEach(([tier, mat1, mat2, eut]) => {
            event.shaped(Item.of(`gtceu:${tier}_1a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_single_wire`,
                B: `gtceu:${mat2}_single_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })


            event.shaped(Item.of(`gtceu:${tier}_4a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_quadruple_wire`,
                B: `gtceu:${mat2}_quadruple_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_8a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_octal_wire`,
                B: `gtceu:${mat2}_octal_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_16a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_hex_wire`,
                B: `gtceu:${mat2}_hex_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`


            })


            event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_input_hatch`)
                .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_single_wire`, `2x gtceu:uhpic_chip`, `#gtceu:circuits/${tier}`, `2x gtceu:${mat1}_double_wire`)
                .itemOutputs(`gtceu:${tier}_energy_input_hatch`)
                .inputFluids('gtceu:crystal_matrix 11520', 'gtceu:soldering_alloy 5760')
                .duration(1000)
                .EUt(eut)

            event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_output_hatch`)
                .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_spring`, `2x gtceu:uhpic_chip`, `#gtceu:circuits/${tier}`, `2x gtceu:${mat1}_double_wire`)
                .itemOutputs(`gtceu:${tier}_energy_output_hatch`)
                .inputFluids('gtceu:crystal_matrix 11520', 'gtceu:soldering_alloy 5760')
                .duration(1000)
                .EUt(eut)
        })
    }



    laserhatch.forEach(([tier, mat1, eut]) => {
        event.recipes.gtceu.assembler(`${tier}_256a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_emitter`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_256a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_sensor`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_emitter`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_sensor`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_double_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_emitter`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_sensor`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)


    })


    // UEV/UIV/MAX Hulls and Casing

    event.recipes.gtceu.assembler('uev_hull')
        .itemInputs('gtceu:uev_machine_casing', '2x gtceu:single_omnium_wire')
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:uev_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uev_casing')
        .itemInputs('8x gtceu:omnium_plate')
        .itemOutputs('gtceu:uev_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_hull')
        .itemInputs('gtceu:uev_machine_casing', '2x gtceu:omnium_single_wire')
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:uiv_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_casing')
        .itemInputs('8x gtceu:infinity_plate')
        .itemOutputs('gtceu:uiv_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('max_hull')
        .itemInputs('gtceu:max_machine_casing', '2x gtceu:holmium_single_wire')
        .inputFluids('gtceu:omnium 1152')
        .itemOutputs('gtceu:max_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('max_casing')
        .itemInputs('8x gtceu:monium_plate')
        .itemOutputs('gtceu:max_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    // Motors
    event.recipes.gtceu.assembly_line('uhv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_neutronium_rod', '8x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_motor')
        // requires research (UV motor with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '16x gtceu:omnium_round', '64x gtceu:fine_netherite_wire', '64x gtceu:fine_netherite_wire', '64x gtceu:fine_netherite_wire', '4x gtceu:tritanium_octal_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_motor')
        // requires research (UHV motor with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '12x gtceu:long_infinity_rod', '12x gtceu:infinity_ring', '24x gtceu:infinity_round', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:tritanium_hex_cable')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_motor')
        // requires research (UEV motor with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Pistons
    event.recipes.gtceu.assembly_line('uhv_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', 'gtceu:neutronium_gear', '2x gtceu:small_neutronium_gear', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        // requires research (UV piston with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_piston')
        .itemInputs('gtceu:uev_electric_motor', '4x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_rod', 'gtceu:omnium_gear', '2x gtceu:small_omnium_gear', '2x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_piston')
        // requires research (UHV piston with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_piston')
        .itemInputs('gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_rod', 'gtceu:infinity_gear', '2x gtceu:small_infinity_gear', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_piston')
        // requires research (UEV piston with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Robot Arms
    event.recipes.gtceu.assembly_line('uhv_robot_arm')
        .itemInputs('4x gtceu:long_neutronium_rod', 'gtceu:neutronium_gear', '3x gtceu:small_neutronium_gear', '3x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_robot_arm')
        // requires research (UV robot arm with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_robot_arm')
        .itemInputs('4x gtceu:long_omnium_rod', 'gtceu:omnium_gear', '3x gtceu:small_omnium_gear', '3x gtceu:uev_electric_motor', 'gtceu:uev_electric_piston', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '4x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_robot_arm')
        // requires research (UHV robot arm with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_robot_arm')
        .itemInputs('4x gtceu:long_infinity_rod', 'gtceu:infinity_gear', '3x gtceu:small_infinity_gear', '3x gtceu:uiv_electric_motor', 'gtceu:uiv_electric_piston', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_robot_arm')
        // requires research (UEV robot arm with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Sensors
    event.recipes.gtceu.assembly_line('uhv_sensor')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_sensor')
        // requires research (UV sensor with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_sensor')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_plate', 'kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_sensor')
        // requires research (UHV sensor with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_sensor')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '2x kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_sensor')
        // requires research (UEV sensor with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Emitters
    event.recipes.gtceu.assembly_line('uhv_emitter')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_rod', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_emitter')
        // requires research (UV emitter with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_emitter')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_rod', 'kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_emitter')
        // requires research (UHV emitter with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_emitter')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_rod', '2x kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_emitter')
        // requires research (UEV emitter with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Field Generators
    event.recipes.gtceu.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:neutronium_frame', '6x gtceu:neutronium_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_field_generator')
        // requires research (UV field generator with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_field_generator')
        .itemInputs('gtceu:omnium_frame', '6x gtceu:omnium_plate', 'kubejs:quasi_stable_neutron_star', '2x gtceu:uev_emitter', '2x #gtceu:circuits/uev', '64x gtceu:fine_netherite_wire', '64x gtceu:fine_netherite_wire', '4x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_field_generator')
        // requires research (UHV field generator with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_field_generator')
        .itemInputs('gtceu:infinity_frame', '6x gtceu:infinity_plate', '2x kubejs:quasi_stable_neutron_star', '2x gtceu:uiv_emitter', '2x #gtceu:circuits/uiv', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_field_generator')
        // requires research (UEV field generator with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Conveyors
    event.recipes.gtceu.assembly_line('uhv_conveyor')
        .itemInputs('2x gtceu:uhv_electric_motor', '2x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_screw', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_conveyor_module')
        // requires research (UV conveyor with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_conveyor')
        .itemInputs('2x gtceu:uev_electric_motor', '2x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_screw', '2x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_conveyor_module')
        // requires research (UHV conveyor with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_conveyor')
        .itemInputs('2x gtceu:uiv_electric_motor', '2x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_screw', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_conveyor_module')
        // requires research (UEV conveyor with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Pumps
    event.recipes.gtceu.assembly_line('uhv_pump')
        .itemInputs('gtceu:uhv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:neutronium_plate', '8x gtceu:neutronium_screw', '32x gtceu:neutronium_ring', 'gtceu:crystal_matrix_rotor', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_pump')
        // requires research (UV pump with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_pump')
        .itemInputs('gtceu:uev_electric_motor', 'gtceu:netherite_huge_fluid_pipe', '2x gtceu:omnium_plate', '8x gtceu:omnium_screw', '48x gtceu:omnium_ring', 'gtceu:netherite_rotor', '2x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_pump')
        // requires research (UHV pump with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_pump')
        .itemInputs('gtceu:uiv_electric_motor', 'gtceu:holmium_huge_fluid_pipe', '2x gtceu:infinity_plate', '8x gtceu:infinity_screw', '64x gtceu:infinity_ring', 'gtceu:holmium_rotor', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_pump')
        // requires research (UEV pump with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Fluid Regulators
    event.recipes.gtceu.assembler('uhv_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv')
        .circuit(1)
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .duration(50)
        .EUt(1966080)

    event.recipes.gtceu.assembler('uev_fluid_regulator')
        .itemInputs('gtceu:uev_electric_pump', '2x #gtceu:circuits/uev')
        .circuit(1)
        .itemOutputs('gtceu:uev_fluid_regulator')
        .duration(50)
        .EUt(3932160)

    event.recipes.gtceu.assembler('uiv_fluid_regulator')
        .itemInputs('gtceu:uiv_electric_pump', '2x #gtceu:circuits/uiv')
        .circuit(1)
        .itemOutputs('gtceu:uiv_fluid_regulator')
        .duration(50)
        .EUt(15728640)
})