author 'Tabarra'
description 'Remotely Manage & Monitor your GTA5 FiveM Server'
repository 'https://github.com/ComplexoGG/txAdmin'
version '6.0.2'
lua54 'yes'
fx_version 'cerulean'
game 'gta5'

server_scripts {
    "@vrp/lib/utils.lua",
    "@vrp/lib/Proxy.lua",
    'resource/shared.lua',
    'entrypoint.js',
    'resource/sv_main.lua',
    'resource/sv_admins.lua',
    'resource/sv_logger.lua',
    'resource/sv_resources.lua',
    'resource/sv_playerlist.lua',
    'resource/menu/server/sv_webpipe.lua',
    'resource/menu/server/sv_base.lua',
    'resource/menu/server/sv_functions.lua',
    'resource/menu/server/sv_main_page.lua',
    'resource/menu/server/sv_vehicle.lua',
    'resource/menu/server/sv_freeze_player.lua',
    'resource/menu/server/sv_trollactions.lua',
    'resource/menu/server/sv_player_modal.lua',
    'resource/menu/server/sv_spectate.lua',
    'resource/menu/server/sv_player_mode.lua'
}