CREATE TABLE "public.cadastro_produtos" (
	"codigo_sap" integer(10) NOT NULL UNIQUE,
	"nome_produto" varchar(100) NOT NULL,
	"descricao_produto" varchar(500) NOT NULL,
	"utilizacao" varchar(500) NOT NULL,
	"tipo_manufatura" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbcadastro_insumo" (
	"codigo_sap" integer(10) NOT NULL,
	"descricao_insumo" varchar(100) NOT NULL,
	"valor_unitario" DECIMAL(8) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbinsumo_producao" (
	"codigo_sap" integer(10) NOT NULL,
	"descricao_insumo" varchar(100) NOT NULL,
	"quantidade_insumo" float8(100) NOT NULL,
	"valor_unitario" DECIMAL(8) NOT NULL,
	"valor_total" DECIMAL(8) NOT NULL,
	"estoque_minimo" float8 NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbproduto" (
	"codigo_sap" integer(10) NOT NULL,
	"nome_produto" varchar(100) NOT NULL,
	"codigo_insumo" integer(10) NOT NULL,
	"descricao_insumo" varchar(100) NOT NULL,
	"quantidade_insumo" float8(100) NOT NULL,
	"valor_unitario" DECIMAL(8) NOT NULL,
	"valor_total" DECIMAL(8) NOT NULL,
	"quantidade_pecas_produzidas" float8(100) NOT NULL,
	"modo_manufatura" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbmanufatura" (
	"codigo_sap" integer NOT NULL,
	"nome_produto" varchar(100) NOT NULL,
	"tipo_manufatura" varchar(100) NOT NULL,
	"quantidade_produto" float8(100) NOT NULL,
	"data_inicio_manufatura" DATE NOT NULL,
	"hora_inicio_manufatura" TIME NOT NULL,
	"data_fim_manufatura" DATE NOT NULL,
	"hora_fim_manufatura" TIME NOT NULL,
	"operador_inicio_manufatura" varchar(100) NOT NULL,
	"operador_final_manufatura" varchar(100) NOT NULL,
	"modo_manufatura" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbtipo_manufatura" (
	"tipo_manufatura" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbmodo_manufatura" (
	"tipo_manufatura" varchar(100) NOT NULL,
	"modo_manufatura" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbalmoxarifado_entregue" (
	"codigo_sap" integer(10) NOT NULL,
	"nome_produto" varchar(100) NOT NULL,
	"quantidade_pecas_entregues" float8(100) NOT NULL,
	"valor_unitario" DECIMAL(8) NOT NULL,
	"valor_total" DECIMAL(8) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tbalmoxarifado_retirada" (
	"codigo_sap" integer(10) NOT NULL,
	"nome_produto" varchar(100) NOT NULL,
	"quantidade_retirada" float8(100) NOT NULL,
	"quantidade_disponivel" float8(100) NOT NULL,
	"data_retirada" DATE NOT NULL,
	"hora_retirada" TIME NOT NULL,
	"pessoa_retirou" varchar(100) NOT NULL,
	"numero_ordem" integer NOT NULL
) WITH (
  OIDS=FALSE
);



ALTER TABLE "cadastro_produtos" ADD CONSTRAINT "cadastro_produtos_fk0" FOREIGN KEY ("tipo_manufatura") REFERENCES "tbtipo_manufatura"("tipo_manufatura");


ALTER TABLE "tbinsumo_producao" ADD CONSTRAINT "tbinsumo_producao_fk0" FOREIGN KEY ("codigo_sap") REFERENCES "tbcadastro_insumo"("codigo_sap");
ALTER TABLE "tbinsumo_producao" ADD CONSTRAINT "tbinsumo_producao_fk1" FOREIGN KEY ("descricao_insumo") REFERENCES "tbcadastro_insumo"("descricao_insumo");
ALTER TABLE "tbinsumo_producao" ADD CONSTRAINT "tbinsumo_producao_fk2" FOREIGN KEY ("valor_unitario") REFERENCES "tbcadastro_insumo"("valor_unitario");

ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk0" FOREIGN KEY ("codigo_sap") REFERENCES "cadastro_produtos"("codigo_sap");
ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk1" FOREIGN KEY ("nome_produto") REFERENCES "cadastro_produtos"("nome_produto");
ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk2" FOREIGN KEY ("codigo_insumo") REFERENCES "tbinsumo_producao"("codigo_sap");
ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk3" FOREIGN KEY ("descricao_insumo") REFERENCES "tbinsumo_producao"("descricao_insumo");
ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk4" FOREIGN KEY ("valor_unitario") REFERENCES "tbinsumo_producao"("valor_unitario");
ALTER TABLE "tbproduto" ADD CONSTRAINT "tbproduto_fk5" FOREIGN KEY ("modo_manufatura") REFERENCES "tbmodo_manufatura"("modo_manufatura");

ALTER TABLE "tbmanufatura" ADD CONSTRAINT "tbmanufatura_fk0" FOREIGN KEY ("codigo_sap") REFERENCES "cadastro_produtos"("codigo_sap");
ALTER TABLE "tbmanufatura" ADD CONSTRAINT "tbmanufatura_fk1" FOREIGN KEY ("nome_produto") REFERENCES "cadastro_produtos"("nome_produto");
ALTER TABLE "tbmanufatura" ADD CONSTRAINT "tbmanufatura_fk2" FOREIGN KEY ("tipo_manufatura") REFERENCES "tbtipo_manufatura"("tipo_manufatura");
ALTER TABLE "tbmanufatura" ADD CONSTRAINT "tbmanufatura_fk3" FOREIGN KEY ("modo_manufatura") REFERENCES "tbmodo_manufatura"("modo_manufatura");


ALTER TABLE "tbmodo_manufatura" ADD CONSTRAINT "tbmodo_manufatura_fk0" FOREIGN KEY ("tipo_manufatura") REFERENCES "tbtipo_manufatura"("tipo_manufatura");

ALTER TABLE "tbalmoxarifado_entregue" ADD CONSTRAINT "tbalmoxarifado_entregue_fk0" FOREIGN KEY ("codigo_sap") REFERENCES "cadastro_produtos"("codigo_sap");
ALTER TABLE "tbalmoxarifado_entregue" ADD CONSTRAINT "tbalmoxarifado_entregue_fk1" FOREIGN KEY ("nome_produto") REFERENCES "cadastro_produtos"("nome_produto");
ALTER TABLE "tbalmoxarifado_entregue" ADD CONSTRAINT "tbalmoxarifado_entregue_fk2" FOREIGN KEY ("valor_unitario") REFERENCES "tbproduto"("valor_unitario");

ALTER TABLE "tbalmoxarifado_retirada" ADD CONSTRAINT "tbalmoxarifado_retirada_fk0" FOREIGN KEY ("codigo_sap") REFERENCES "cadastro_produtos"("codigo_sap");
ALTER TABLE "tbalmoxarifado_retirada" ADD CONSTRAINT "tbalmoxarifado_retirada_fk1" FOREIGN KEY ("nome_produto") REFERENCES "cadastro_produtos"("nome_produto");










