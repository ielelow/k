import { EngineConfigurationOption, Text } from '@sonolus/core'

export const optionsDefinition = {
    speed: {
        name: Text.Speed,
        standard: true,
        advanced: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    hidden: {
        name: Text.Hidden,
        standard: true,
        advanced: true,
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    noteSpeed: {
        name: Text.NoteSpeed,
        scope: 'Sekai',
        type: 'slider',
        def: 6,
        min: 1,
        max: 12,
        step: 0.01,
    },
    mirror: {
        name: Text.Mirror,
        type: 'toggle',
        def: 0,
    },
    sfxEnabled: {
        name: Text.Effect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    autoSFX: {
        name: Text.EffectAuto,
        scope: 'Sekai',
        type: 'toggle',
        def: 0,
    },
    noteEffectEnabled: {
        name: Text.NoteEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    noteEffectSize: {
        name: Text.NoteEffectSize,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    markerAnimation: {
        name: Text.MarkerAnimation,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    simLineEnabled: {
        name: Text.Simline,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    connectorAlpha: {
        name: Text.ConnectorAlpha,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 1,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    connectorAnimation: {
        name: Text.ConnectorAnimation,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    laneEffectEnabled: {
        name: Text.LaneEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    slotEffectEnabled: {
        name: Text.SlotEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    slotEffectSize: {
        name: Text.SlotEffectSize,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0,
        max: 2,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    stageCover: {
        name: Text.StageCoverVertical,
        advanced: true,
        scope: 'Sekai',
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    lockStageAspectRatio: {
        name: Text.StageAspectratioLock,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
} satisfies Record<string, EngineConfigurationOption>
