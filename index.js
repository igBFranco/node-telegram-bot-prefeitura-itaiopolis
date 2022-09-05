const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Olá ${ctx.chat.first_name}, Seja Bem Vindo ao Bot Oficial da Prefeitura de Itaiópolis!`, {});
    bot.telegram.sendMessage(ctx.chat.id, `Para podermos lhe ajudar, selecione uma opção:`, {
        reply_markup: {
            keyboard: [
                [
                    {text: "Atendimento"},
                    {text: "Últimas Notícias"},
                    {text: "Canais Oficiais"},
                    {text: "Ajuda"},

                ]
            ],
            resize_keyboard: true,
        }
    })
});

bot.on('text', ctx => {
    if (ctx.message.text === "Atendimento") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o Setor que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Administração"},
                        {text: "Controle Interno"},
                        {text: "Contabilidade"},
                    ],
                    [
                        {text: "Tributação"},
                        {text: "Jurídico"},
                        {text: "Recursos Humanos"},
                        {text: "Tesouraria"},
                    ],
                    [
                        {text: "Engenharia"},
                        {text: "Educação"},
                        {text: "Patrimônio"},
                        {text: "Licitações"},
                    ],
                    [
                        {text: "Obras"},
                        {text: "Agronegócio"},
                        {text: "Bloco de Notas"},
                        {text: "Casa da Cultura"},
                    ],
                    [
                        {text: "Saúde"},
                        {text: "Vigilância Epidemiológica"},
                        {text: "Vigilância Sanitária"},
                    ],
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
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agronegocio@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Agronegócio") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agronegocio@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Bloco de Notas") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2844`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agronegocio@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Casa da Cultura") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1306`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: cultura@itaiopolis.sc.gov.br
        turismo@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Saúde") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1893`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: saude@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Vigilância Epidemiológica") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2760`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: vigilancia@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Vigilância Sanitária") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-1492`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: vigilancia@itaiopolis.sc.gov.br`, {});
    }

});

bot.hears('oi', (ctx) => ctx.reply(`Olá! ${ctx.chat.first_name}`))

bot.launch()