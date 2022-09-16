const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Olá ${ctx.chat.first_name}, Seja Bem Vindo ao Canal Oficial da Prefeitura de Itaiópolis no Telegram!`, {});
    bot.telegram.sendMessage(ctx.chat.id, `Para podermos lhe ajudar, selecione uma opção:`, {
        reply_markup: {
            keyboard: [
                [
                    {text: "Atendimento"},
                    {text: "Últimas Notícias"},
                    {text: "Canais Oficiais"},

                ]
            ],
            resize_keyboard: true,
        }
    })
});

bot.on('text', ctx => {
    console.log(ctx.message);
    if (ctx.message.text === "Atendimento" || ctx.message.text === "⬅️ Voltar ao Atendimento" ) {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione a Secretaria em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Administração e Finanças"},
                        {text: "Agricultura e Meio Ambiente"},
                    ],
                    [
                        {text: "Desenvolvimento Social e Habitação"},
                        {text: "Educação e Esporte"},
                    ],
                    [
                        {text: "Gabinete do Prefeito"},
                        {text: "Indústria, Comércio, Cultura e Turismo"},
                    ],
                    [
                        {text: "Viação e Obras Públicas"},
                        {text: "Saúde"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Menu Inicial"}
                    ]
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Menu Inicial" || ctx.message.text === "⬅️ Voltar ao Menu Inicial" ) {
        bot.telegram.sendMessage(ctx.chat.id, `Para podermos lhe ajudar, selecione uma opção:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Atendimento"},
                        {text: "Últimas Notícias"},
                        {text: "Canais Oficiais"},
    
                    ]
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Últimas Notícias") {
        bot.telegram.sendMessage(ctx.chat.id, `Acesse o Portal Municipal para acompanhar as últimas notícias`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Portal Municipal", url: "https://www.itaiopolis.sc.gov.br/"},
                    ]
                ],
            }
        })
    }
    if (ctx.message.text === "Canais Oficiais") {
        bot.telegram.sendMessage(ctx.chat.id, `Acompanhe a Prefeitura em seus Canais Oficiais!`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Portal Municipal", url: "https://www.itaiopolis.sc.gov.br/"},
                        {text: "Instagram", url: "https://www.instagram.com/prefeitura_itaiopolis/"},
                        {text: "Facebook", url: "https://www.facebook.com/prefeituraitaoficial/"},
                    ]
                ],
            }
        })
    }
    if (ctx.message.text === "Administração e Finanças") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Administração"},
                        {text: "Contabilidade"},
                        {text: "Controle Interno"},
                    ],
                    [
                        {text: "Defesa Civil"},
                        {text: "Engenharia"},
                        {text: "Jurídico"},
                        {text: "Licitações"},
                    ],
                    [
                        {text: "Patrimônio"},
                        {text: "Projetos"},
                        {text: "Recursos Humanos"},
                        {text: "Tesouraria"},
                        {text: "Tributação"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Agricultura e Meio Ambiente") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Agricultura"},
                        {text: "Bloco de Notas"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Desenvolvimento Social e Habitação") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Assistência Social"},
                        {text: "Conselho Tutelar"},
                        {text: "CRAS - Centro de Referência em Assistência Social"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Educação e Esporte") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Educação"},
                        {text: "Esporte"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Indústria, Comércio, Cultura e Turismo") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Indústria e Comércio"},
                        {text: "Casa da Cultura"},
                        {text: "Turismo"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Viação e Obras Públicas") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Obras"},
                        {text: "Urbanismo"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    if (ctx.message.text === "Saúde") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o departamento em que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Secretaria de Saúde"},
                        {text: "Vigilância Epidemiológica"},
                        {text: "Vigilância Sanitária"},
                    ],
                    [
                        {text: "⬅️ Voltar ao Atendimento"},
                    ],
                ],
                resize_keyboard: true,
            }
        })
    }
    
    if (ctx.message.text === "Administração") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: prefeitura@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Controle Interno") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: controleinterno@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Contabilidade") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: contabilidade@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Tributação") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: tributacao@itaiopolis.sc.gov.br
        fiscaltributos@itaiopolis.sc.gov.br
        analistatributario@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Jurídico") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: juridico@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Recursos Humanos") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: rh.prefeitura.itaiopolis@gmail.com
        segurancatrabalho@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Tesouraria") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: tesouraria@itaiopolis.sc.gov.br
        contabilidade.lorena@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Engenharia") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: engenharia@itaiopolis.sc.gov.br
            topografia@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Educação") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: transporteescolar@itaiopolis.sc.gov.br
            educacaoitaiopolis@yahoo.com.br
            alimento.escolar@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Patrimônio") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: patrimonio.luis@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Licitações") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: licitacao@itaiopolis.sc.gov.br
            cotacao.itaiopolis@gmail.com`, {});
    }else if (ctx.message.text === "Obras") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2746`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agronegocio@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Agricultura") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2844`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agricultura@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Bloco de Notas") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2844`, {});
    }else if (ctx.message.text === "Casa da Cultura") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1306`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: cultura@itaiopolis.sc.gov.br
        turismo@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Secretaria de Saúde") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1893`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: saude@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Vigilância Epidemiológica") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2760`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: vigilancia@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Vigilância Sanitária") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1492`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: vigilancia@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Assistência Social") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1274`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: desenvolvimentosocial@itaiopolis.sc.gov.br
        habitacao@itaiopolis.sc.gov.br
        bolsafamilia@itaiopolis.sc.gov.br
        `, {});
    }else if (ctx.message.text === "Conselho Tutelar") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1149`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📱 WhatsApp: (47)99730-7887`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: conselhoitaiopolis@yahoo.com.br`, {});
    }else if (ctx.message.text === "CRAS - Centro de Referência em Assistência Social") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1156`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: cras@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Urbanismo") {
        bot.telegram.sendMessage(ctx.chat.id, `📱 WhatsApp: (47)98874-6871`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: urbanismo@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Indústria e Comércio") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
    }else if (ctx.message.text === "Turismo") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1306`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: turismo@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Projetos") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: projetos@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Esporte") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2152`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: esporteitaiopolis@yahoo.com.br`, {});
    }else if (ctx.message.text === "Defesa Civil") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2844`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: defesacivil@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Gabinete do Prefeito") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: gabinete@itaiopolis.sc.gov.br`, {});
    }

});


bot.launch()