import {
  badgeMap,
  VKKDecisionTextMap,
  VMUTextMap,
} from "@entities/VVK/constants";
import type { VVKRecord } from "@entities/VVK/types";
import { data } from "@pages/VVKRecords/mock";
import { BackButton } from "@shared/components/BackButton";
import { Badge } from "@shared/components/ui/badge";
import { Card, CardContent, CardHeader } from "@shared/components/ui/card";
import { Typography } from "@shared/components/ui/typography";
import { useParams } from "react-router";

const defaultRecord = {};

export default function VVKRecord() {
  const { id = "" } = useParams();

  const record = data.find((record) => record.id === id);

  const {
    soldier,
    detachment,
    hospitalization,
    lpu,
    vmu,
    vvkConclusion,
    vvkDecision,
    vacation,
  } = record || (defaultRecord as VVKRecord);

  return record ? (
    <div className="flex flex-col gap-5">
      <BackButton className="w-max" />
      <div className="flex flex-col">
        <Typography type="h2">{`Военнослужащий ${soldier.fio}`}</Typography>
        <Typography
          type="big_regular"
          className="text-cyan-01"
        >{`Личный номер №${soldier.personalNumber}`}</Typography>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6">
          <Card className="basis-xs">
            <CardHeader>
              <Typography type="big_regular">Данные пациента</Typography>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              <div className="flex flex-col">
                <Typography>{soldier.fio}</Typography>
                <Typography>{soldier.birthdayDate}</Typography>
                <Typography>{soldier.title}</Typography>
                <Typography>{`№${soldier.personalNumber}`}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>{soldier.division}</Typography>
                <Typography>{soldier.unit}</Typography>
              </div>
            </CardContent>
          </Card>

          <Card className="basis-md">
            <CardHeader>
              <Typography type="big_regular">Информация ЛПУ</Typography>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              <div className="flex flex-col">
                <Typography>Вид и дата отрыва</Typography>
                <Typography type="small">{detachment.type}</Typography>
                <Typography type="small">{detachment.date}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>Запрос госпитализации</Typography>
                <Typography type="small">{hospitalization.date}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>диагноз</Typography>
                <Typography type="small">{lpu.diagnosis}</Typography>
                <Typography type="small">{lpu.admissionDate}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>дата поступления</Typography>
                <Typography type="small">{lpu.admissionDate}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>дата завершения</Typography>
                <Typography type="small">{lpu.completionDate}</Typography>
              </div>
            </CardContent>
          </Card>

          <Card className="basis-md">
            <CardHeader>
              <Typography type="big_regular">Информация ВВК</Typography>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              <div className="flex flex-col">
                <Typography>ВМУ проведения ВВК</Typography>
                <Typography type="small">{vmu.name}</Typography>
                <Typography type="small">{vmu.date}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>дата начала/отказа</Typography>
                <div className="flex gap-3">
                  <Badge
                    variant={badgeMap[vmu.type]}
                    className="w-[180px] justify-start"
                  >
                    <Typography type="small">{VMUTextMap[vmu.type]}</Typography>
                  </Badge>
                  <Typography type="small">{vmu.date}</Typography>
                </div>
              </div>
              <div className="flex flex-col">
                <Typography>дата и номер заключения ВВК</Typography>
                <Typography type="small">{vvkConclusion.date}</Typography>
                <Typography type="small">{vvkConclusion.number}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography>дата утверждения/отказа</Typography>
                <Typography type="small">{lpu.admissionDate}</Typography>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <Badge
                    variant={badgeMap[vvkDecision.type]}
                    className="w-[180px] justify-start"
                  >
                    <Typography type="small">
                      {VKKDecisionTextMap[vvkDecision.type]}
                    </Typography>
                  </Badge>
                  <Typography type="small">{vvkDecision.date}</Typography>
                </div>

                <Typography type="small">{vvkDecision.category}</Typography>
                <Typography type="small">
                  {vvkDecision.redSeal.toString()}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography>примечания</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <Typography type="big_regular">
              Отпуск/ожидание увольнения
            </Typography>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <div className="flex flex-col">
              <Typography type="small">{vacation.days}</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ) : (
    "Записи с таким id не существует"
  );
}
